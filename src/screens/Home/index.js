import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CheckBox from 'react-native-check-box';

import styles from './style';
import theme from '../../theme/theme';
import {scale} from '../../utils/scale';
import {Screens} from '../../constants/constants';
import {markComplete, deleteTask} from '../../redux/slices/taskSlice';
import {dateToFormat} from '../../utils/Dateutiles';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import Txt from '../../components/Txt';
import Frame from '../../components/Frame';
import Delete from '../../assets/svg/delete.svg';

const TaskListEmptyComponent = () => (
  <View style={styles.emtyContainer}>
    <Txt style={styles.emptyText}>There are no tasks yet!</Txt>
  </View>
);

const AddButton = () => {
  const navigation = useNavigation();
  const navigateToAddTask = () => {
    navigation.navigate(Screens.AddTask);
  };
  return (
    <View style={styles.addButtonContainer}>
      <CustomTouchableOpacity
        onPress={navigateToAddTask}
        style={styles.addButton}>
        <Txt style={styles.addButtonText}>+</Txt>
      </CustomTouchableOpacity>
    </View>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task?.tasks);

  const [tasksList, setTasksList] = useState(tasks);
  const [isSortedList, setIsSortedList] = useState(false);
  const [isincompletedSelected, setIsincompletedSelected] = useState(false);

  const filterIncomplete = () => {
    const filteredTasks = isincompletedSelected
      ? tasks
      : tasks.filter(task => !task?.isComplete);
    setTasksList(filteredTasks);
    setIsincompletedSelected(!isincompletedSelected);
  };

  const sortByDueDateAscending = () => {
    const sortedTasks = isSortedList
      ? tasksList
      : [...tasksList].sort((a, b) => new Date(a.date) - new Date(b.date));
    setTasksList(sortedTasks);
    setIsSortedList(!isSortedList);
  };

  useEffect(() => {
    setTasksList(tasks);
  }, [tasks]);

  const RenderTask = ({task}) => {
    const {id, date, title, isComplete} = task || {};

    return (
      <View style={styles.taskContainer}>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            checkBoxColor={theme.palette.SecondaryLight}
            onClick={() => {
              dispatch(markComplete({id}));
            }}
            isChecked={isComplete}
          />
        </View>
        <View style={styles.taskInfoContainer}>
          <Txt style={styles.dateText}>{dateToFormat(date)}</Txt>
          <Txt style={[styles.titleText, isComplete && styles.completedTitle]}>
            {title}
          </Txt>
        </View>
        <CustomTouchableOpacity
          onPress={() => {
            dispatch(deleteTask({id}));
          }}
          style={styles.checkBoxContainer}>
          <Delete />
        </CustomTouchableOpacity>
      </View>
    );
  };

  const Header = () => {
    return (
      <>
        <Txt style={styles.heading}>Tasks</Txt>
        {tasks?.length > 0 && (
          <View style={styles.buttonContainer}>
            <CustomTouchableOpacity
              onPress={filterIncomplete}
              style={[
                styles.button,
                isincompletedSelected && styles.selectedButton,
                {marginRight: scale(10, true)},
              ]}>
              <Txt>incomplete</Txt>
            </CustomTouchableOpacity>
            <CustomTouchableOpacity
              onPress={sortByDueDateAscending}
              style={[styles.button, isSortedList && styles.selectedButton]}>
              <Txt>sort by date</Txt>
            </CustomTouchableOpacity>
          </View>
        )}
      </>
    );
  };

  return (
    <Frame>
      <FlatList
        data={tasksList}
        keyExtractor={task => task?.id?.toString()}
        ListHeaderComponent={<Header />}
        ListEmptyComponent={<TaskListEmptyComponent />}
        renderItem={({item}) => <RenderTask task={item} />}
      />
      <AddButton />
    </Frame>
  );
};

export default Home;