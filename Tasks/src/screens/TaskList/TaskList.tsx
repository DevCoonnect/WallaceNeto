import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Alert,
  ImageSourcePropType,
  ColorValue,
} from 'react-native';
import moment from 'moment';
import '../../../node_modules/moment/locale/pt-br';
import AsyncStorage from '@react-native-async-storage/async-storage';

import todayImage from '../../../assets/imgs/today.jpg';
import tomorrowImage from '../../../assets/imgs/tomorrow.jpg';
import weekImage from '../../../assets/imgs/week.jpg';
import monthImage from '../../../assets/imgs/month.jpg';

import commonStyles from '../../global/commonStyles';
import styles from './styles';
import Task from '../../components/Task/Task';
import {TaskType} from '../../global/types';
import AddTask from '../AddTask/AddTask';
import {server, showError} from '../../global/common';
import axios from 'axios';

type ScreenInfosState = {
  title: string;
  color: ColorValue;
  image: ImageSourcePropType;
};

type TaskListState = {
  daysAhead?: number;
  showDoneTasks: boolean;
  showAddTask: boolean;
  visibleTasks: TaskType[];
  tasks: TaskType[];
  screenInfos?: ScreenInfosState;
};

const initialState = {
  showDoneTasks: true,
  showAddTask: false,
  visibleTasks: [],
  tasks: [],
  screenInfos: {
    title: 'Hoje',
    color: commonStyles.colors.today,
    image: todayImage,
  },
};

export default class TaskList extends Component<any> {
  state: TaskListState = {...initialState};

  async componentDidMount() {
    this.setScreenInfos();
    const stateString = await AsyncStorage.getItem('tasksState');
    const savedState = JSON.parse(stateString || '') || initialState;
    this.setState({showDoneTasks: savedState.showDoneTasks}, this.filterTask);

    this.loadTasks();
  }

  setScreenInfos = () => {
    switch (this.props.daysAhead) {
      case 1:
        this.setState({
          screenInfos: {
            title: 'Amanhã',
            color: commonStyles.colors.tomorrow,
            image: tomorrowImage,
          },
        });
        break;
      case 7:
        this.setState({
          screenInfos: {
            title: 'Semana',
            color: commonStyles.colors.week,
            image: weekImage,
          },
        });
        break;
      case 30:
        this.setState({
          screenInfos: {
            title: 'Mês',
            color: commonStyles.colors.month,
            image: monthImage,
          },
        });
        break;
      default:
        this.setState({
          screenInfos: {
            title: 'Hoje',
            color: commonStyles.colors.today,
            image: todayImage,
          },
        });
        break;
    }
  };

  loadTasks = async () => {
    try {
      const maxDate = moment()
        .add({days: this.props.daysAhead})
        .format('YYYY-MM-DD 23:59:59');
      const res = await axios.get(`${server}/tasks?date=${maxDate}`);

      this.setState({tasks: res.data}, this.filterTask);
    } catch (e) {
      showError(e);
    }
  };

  toggleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTask);
  };

  filterTask = () => {
    let visibleTasks = null;

    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = (task: TaskType) => task.doneAt === null;
      visibleTasks = this.state.tasks.filter(pending);
    }

    this.setState({visibleTasks});
    AsyncStorage.setItem(
      'tasksState',
      JSON.stringify({
        showDoneTasks: this.state.showDoneTasks,
      }),
    );
  };

  toggleTask = async (taskId: number) => {
    try {
      await axios.put(`${server}/tasks/${taskId}/toggle`);
      this.loadTasks();
    } catch (e) {
      showError(e);
    }
  };

  addTask = async (newTask: TaskType) => {
    if (!newTask.desc.trim()) {
      Alert.alert('Dados inválidos', 'Descrição não informada');
      return;
    }

    try {
      await axios.post(`${server}/tasks`, {
        desc: newTask.desc,
        estimateAt: newTask.estimateAt,
      });

      this.setState({showAddTask: false}, this.loadTasks);
    } catch (e) {
      showError(e);
    }
  };

  deleteTask = async (taskId: number) => {
    try {
      await axios.delete(`${server}/tasks/${taskId}`);
      this.loadTasks();
    } catch (e) {
      showError(e);
    }
  };

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
    return (
      <View style={styles.container}>
        <AddTask
          color={this.state.screenInfos!.color}
          isVisible={this.state.showAddTask}
          onCancel={() => this.setState({showAddTask: false})}
          onSave={this.addTask}
        />

        <ImageBackground
          source={this.state.screenInfos?.image}
          style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon
                name={'bars'}
                size={20}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                size={20}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.titleBar}>
            <Text style={styles.title}>{this.state.screenInfos?.title}</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>

        <View style={styles.taskList}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task
                {...item}
                onToggleTask={this.toggleTask}
                onDelete={this.deleteTask}
              />
            )}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.addButton,
            {backgroundColor: this.state.screenInfos?.color},
          ]}
          onPress={() => this.setState({showAddTask: true})}>
          <Icon name="plus" size={20} color={commonStyles.colors.secondary} />
        </TouchableOpacity>
      </View>
    );
  }
}
