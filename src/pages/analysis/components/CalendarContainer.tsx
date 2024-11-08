import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';

import NEGATIVE from '@/assets/svgs/NEGATIVE.svg';
import NEUTRAL from '@/assets/svgs/NEUTRAL.svg';
import POSITIVE from '@/assets/svgs/POSITIVE.svg';
import { useMonthEmotionReport } from '@/tanstackQuery/queries/analysis';
import { dateToString } from '@/utils/formatter/DateFormat';
import useRootStore from '@/zustand';

// 캘린더 한국어 설정
LocaleConfig.locales['ko'] = {
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';

interface CalendarContainerProps {
  onDayPress: () => void;
}

const CalendarContainer = ({ onDayPress }: CalendarContainerProps) => {
  const today = new Date();
  const { selectedDate, setSelectedDate, nowSelectedChild } = useRootStore();
  const MonthEmotionData = useMonthEmotionReport({
    childId: nowSelectedChild?.id || 0,
    year: Number(selectedDate.split('-')[0]),
    month: Number(selectedDate.split('-')[1]),
  });

  const getFeelIcon = (feel: 'NEUTRAL' | 'NEGATIVE' | 'POSITIVE') => {
    switch (feel) {
      case 'NEUTRAL':
        return <NEUTRAL width={30} height={30} />;
      case 'NEGATIVE':
        return <NEGATIVE width={30} height={30} />;
      case 'POSITIVE':
        return <POSITIVE width={30} height={30} />;
    }
  };

  const todayString = dateToString(today);

  return (
    <View className="flex-1">
      <Calendar
        theme={{ arrowColor: '#d6d6d6' }}
        style={{ flex: 1 }}
        initialDate={dateToString(today)}
        markingType="dot"
        monthFormat="yyyy년 MM월"
        dayComponent={({ date, state }: { date: DateData; state?: string }) => {
          return (
            <View
              className="flex-1 items-center justify-center p-0.5"
              style={state === 'disabled' ? { opacity: 0.2 } : {}}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedDate(date.dateString);
                  console.log(date, state);
                  if (date.dateString <= todayString) {
                    onDayPress();
                  }
                }}
                className="flex-1 items-center justify-center flex gap-1">
                <View>
                  {MonthEmotionData.find(dayData => dayData.date === date.dateString)?.emotion ? (
                    getFeelIcon(MonthEmotionData.find(temp => temp.date === date.dateString)?.emotion ?? 'NEUTRAL')
                  ) : (
                    <View className="w-8 h-6" />
                  )}
                </View>
                <Text
                  className="w-[42px] text-center text-sm text-my_black font-base"
                  style={
                    date.dateString === selectedDate
                      ? { backgroundColor: '#FF5185', borderRadius: 4, color: '#ffffff' }
                      : {}
                  }>
                  {date.day}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CalendarContainer;
