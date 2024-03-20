import { Agenda, AgendaList, Timeline, ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { data } from './data'
import AgendaItem from './AgendaItem'
import React from 'react'

const ITEMS: any[] = data;

interface Props {
    listView: boolean
}

const Calendar = (props: Props) => {
    // const { listView } = props;
    const listView  = true;

    const renderItem = React.useCallback(({item}: any) => {
        return <AgendaItem item={item}/>;
    }, []);

    return (
        <CalendarProvider
            date='2024-03-01'
            onDateChanged={() => {}}
            onMonthChange={() => {}}
            showTodayButton
            disabledOpacity={0.6}
        >
            <ExpandableCalendar
                // horizontal={false}
                // hideArrows
                // disablePan
                // hideKnob
                // initialPosition={ExpandableCalendar.positions.OPEN}
                // calendarStyle={{ borderWidth: 1, borderColor: 'gray' }}
                // headerStyle={{ backgroundColor: 'white' }}
            />
            { listView ? (
                <AgendaList
                    sections={ITEMS}
                    renderItem={renderItem}
                    // sectionStyle={{ backgroundColor: 'transparent' }}
                />
            ) : null}
            
        </CalendarProvider>
    )
}

export default Calendar