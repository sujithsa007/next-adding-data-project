import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://media.architecturaldigest.com/photos/5c537b3292ce212ce3f51760/master/w_1600%2Cc_limit/DB6N0Y.jpg"
      title="First Meetup"
      address="12213 Street, some city"
      description="This is a meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      image:
        "https://media.architecturaldigest.com/photos/5c537b3292ce212ce3f51760/master/w_1600%2Cc_limit/DB6N0Y.jpg",
      id: meetupId,
      title: "FirstMeetup",
      address: "12213 Street, some city",
      description: "This is a meetup",
    },
  };
}

export default MeetupDetails;
