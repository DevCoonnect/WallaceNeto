import React, {Component} from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  ColorValue,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import styles from './styles';
import {TaskType} from '../../global/types';

type AddTaskProps = {
  isVisible: boolean;
  onCancel: () => void;
  onSave?: (newTask: TaskType) => void;
  color: ColorValue;
};

const initialState = {desc: '', date: new Date(), showDatePicker: false};

export default class AddTask extends Component<AddTaskProps> {
  state = {...initialState};

  save = () => {
    const newTask = {
      id: Math.random(),
      desc: this.state.desc,
      estimateAt: this.state.date,
    };

    this.props.onSave && this.props.onSave(newTask);
    this.setState({...initialState});
  };

  getDateTimePicker = () => {
    let datePicker = (
      <DateTimePicker
        value={this.state.date}
        onChange={(_, date) => this.setState({date, showDatePicker: false})}
        mode="date"
      />
    );

    if (Platform.OS === 'android') {
      const dateString = moment(this.state.date).format(
        'ddd, D [de] MMMM [de] YYYY',
      );

      datePicker = (
        <View>
          <TouchableOpacity
            onPress={() => this.setState({showDatePicker: true})}>
            <Text style={styles(this.props.color).date}>{dateString}</Text>
          </TouchableOpacity>

          {this.state.showDatePicker && datePicker}
        </View>
      );
    }

    return datePicker;
  };

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles(this.props.color).background}>
            <TouchableWithoutFeedback onPress={() => null}>
              <View style={styles(this.props.color).container}>
                <Text style={styles(this.props.color).header}>Nova tarefa</Text>

                <TextInput
                  style={styles(this.props.color).input}
                  placeholder="Informe a descrição..."
                  onChangeText={desc => this.setState({desc})}
                  value={this.state.desc}
                />

                {this.getDateTimePicker()}

                <View style={styles(this.props.color).buttons}>
                  <TouchableOpacity onPress={this.props.onCancel}>
                    <Text style={styles(this.props.color).button}>
                      Cancelar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.save}>
                    <Text style={styles(this.props.color).button}>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
