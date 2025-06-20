import React from "react";
import Button from "../../components/ui/Button";
import TextInput from "../../components/ui/TextInput";
import Card from "../../components/ui/Card";
import profileImage from "../../assets/personal/profile.jpg";
import newOne from "../../assets/personal/newOne.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faSackDollar,
  faDatabase,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <Button name="Click Me" className="mt-4 bg-pink-500" />
        <p className="text-gray-500 mt-2">
          This is a paragraph styled with Tailwind CSS.
        </p>
        <p className="text-blue-500 mt-2">
          This is another paragraph with a different style.
        </p>
        <div className="flex space-x-4 mt-4">
          <Button
            name="Submit"
            className=" bg-green-600"
            onClick={() => {
              console.log("Submit clicked");
            }}
          />
          <Button
            name="Cancel"
            className="bg-red-600"
            onClick={() => {
              console.log("Cancel clicked");
            }} // call back function
          />
        </div>
        <TextInput
          type="text"
          label="Username"
          placeholder="Enter your username"
          className="mt-4"
          onChange={(e) => console.log("Username:", e.target.value)}
        />
        <TextInput
          type="email"
          label="Email"
          placeholder="Enter your email"
          className="mt-4"
          onChange={(e) => console.log("Email:", e.target.value)}
        />
      </div>
      <div className="my-8 flex justify-center gap-4">
        <Card
          title="My Profile Card"
          description="This is a sample profile card created using Tailwind CSS and React."
          imageUrl={profileImage}
          className="bg-green-100"
          imageClassName="hover:scale-105 transition-transform"
          titleClassName="text-2xl  font-bold text-green-400"
          descriptionClassName="text-sm text-gray-700"
        >
          <div className="h-full bg-green-300 p-2 rounded-3xl">
            <p className="text-gray-700">Additional content can go here.</p>
            <Button
              name="Action"
              className="bg-green-500 text-white rounded-3xl cursor-pointer"
              onClick={() => {
                console.log("Action clicked");
              }}
            />
          </div>
        </Card>
        <Card
          title="New Profile Card"
          description="This is a sample profile card created using Tailwind CSS and React."
          imageUrl={newOne}
          className="bg-blue-100 h-auto"
          imageClassName="hover:scale-105 transition-transform"
          titleClassName="text-2xl  font-bold text-blue-400"
          descriptionClassName="text-sm text-gray-700"
        >
          <div className="flex items-center justify-evenly">
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-blue-500 text-xl"
            />
            <FontAwesomeIcon
              icon={faMessage}
              className="text-blue-500 text-xl"
            />
            <FontAwesomeIcon
              icon={faSackDollar}
              className="text-blue-500 text-xl"
            />
            <FontAwesomeIcon
              icon={faWalking}
              className="text-blue-500 text-xl"
            />
          </div>
        </Card>

        <Card
          title="Another Profile Card"
          description="This is another sample profile card created using Tailwind CSS and React."
          imageUrl={profileImage}
          className="bg-green-100"
          imageClassName="hover:scale-105 transition-transform"
          titleClassName="text-2xl  font-bold text-green-400"
          descriptionClassName="text-sm text-gray-700"
        >
          <div className="flex  items-center justify-between">
            <Button
              name="View Profile"
              className="bg-blue-500 text-white rounded-3xl cursor-pointer"
              onClick={() => {
                console.log("View Profile clicked");
              }}
            />
            <Button
              name="Edit Profile"
              className="bg-yellow-500 text-white rounded-3xl cursor-pointer"
              onClick={() => {
                console.log("Edit Profile clicked");
              }}
            />
          </div>
        </Card>
      </div>
    </>
  );
}

export default Home;
