import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://media.architecturaldigest.com/photos/5c537b3292ce212ce3f51760/master/w_1600%2Cc_limit/DB6N0Y.jpg",
    address: "Some address, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://media.architecturaldigest.com/photos/5c537b3292ce212ce3f51760/master/w_1600%2Cc_limit/DB6N0Y.jpg",
    address: "Some address 1234, 98765 Some City",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10
  };
}

// export async function getServerSideProps(context) {
//  const req = context.req;
//  const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
