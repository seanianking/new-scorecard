import React from 'react'
import EventSection from './EventSection'
import RadioGroup from '../forms/RadioGroup'

type Props = {}

const interviewItems = [
  { label: 'Great Energy' },
  { label: 'Good Eye Contact/Posture' },
  { label: 'Engaging Conversation/Responses' },
  { label: 'Seems Nervous' },
  { label: 'Bubbly Personality' },
  { label: 'Poised' },
]

const requiredIntroItems = [
  { label: 'Name' },
  { label: 'Age' },
  { label: 'Where from?' },
]

const introItems = [
  { label: 'Great Energy' },
  { label: 'Clear and easy to underst/Well spoken' },
  { label: 'Great Speaker' },
  { label: 'Work on Projection' },
  { label: 'Slow down' },
  { label: 'Add more personality' },
]

const requiredCasualWeartems = [
  { label: 'Stopped at 1st X' },
  { label: '2nd X' },
  { label: '3rd X' },
  { label: 'Walked through 2nd X on way to 4th X' },
  { label: '4th X' },
]

const casualWearItems = [
  { label: 'Great Energy' },
  { label: 'Good Eye Contact' },
  { label: 'Loved your outfit' },
  { label: 'Work on your turns' },
  { label: 'Pretty feet needs work' },
  { label: 'Great Modeling' },
]

const requiredPartyWearItems = [
  { label: 'Stopped at 1st X' },
  { label: '2nd X' },
  { label: '3rd X' },
  { label: 'Walked through 2nd X on way to 4th X' },
  { label: '4th X' }
]

const partyWearItems = [

  { label: 'Great Energy/Beautiful Smile' },
  { label: 'Great Modeling' },
  { label: 'Stunning' },
  { label: 'Work on projection/Lost Smile' },
  { label: 'Pretty feet needs work' },
  { label: 'Good Eye Contact' },
]

const ageGroups = [
  { label: 'Baby Miss', value: 'Baby Miss' },
  { label: 'Tiny Miss', value: 'Tiny Miss' },
  { label: 'Mini Miss', value: 'Mini Miss' },
  { label: 'Little Miss', value: 'Little Miss' },
  { label: 'Young', value: 'Young' },
  { label: 'Jr. Teen Miss', value: 'Jr. Teen Miss' },
  { label: 'Teen Miss', value: 'Teen Miss' },
  { label: 'Miss', value: 'Miss' },
]

const CompulsoryEvents = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-3xl font-bold">All American Girl Pageant</h1>
        <h2 className="text-2xl font-semibold">Judges Comment Sheets</h2>
        <RadioGroup items={ageGroups} groupName="ageGroup" />
      </div>
      <div className="space-y-8 p-6">
        <EventSection eventName="Interview/Playtime" checkboxItems={interviewItems} />
        <EventSection eventName="Personal Introduction" checkboxItems={introItems} requiredItems={requiredIntroItems} />
        <EventSection eventName="Casual Wear" checkboxItems={casualWearItems} requiredItems={requiredCasualWeartems} />
        <EventSection eventName="Party wear/Formal wear" checkboxItems={partyWearItems} requiredItems={requiredPartyWearItems} />
      </div>
    </>
  )
}

export default CompulsoryEvents
