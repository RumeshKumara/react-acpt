import React from "react";

const Card = ({
  title,
  description,
  imageUrl,
  className,
  imageClassName,
  titleClassName,
  descriptionClassName,
  children,
}) => {
  return (
    <div
      className={`w-[300px] overflow-hidden rounded-3xl shadow-md ${
        className || ""
      }`}
    >
      <img
        src={imageUrl}
        alt={title}
        className={`w-full h-[200px] object-cover ${imageClassName || ""}`}
      />
      <div className="p-4">
        <h2 className={`text-xl font-semibold mb-2 ${titleClassName || ""}`}>
          {title}
        </h2>
        <p
          className={`text-gray-800 leading-relaxed ${
            descriptionClassName || ""
          }`}
        >
          {description}
        </p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;

{
  /* <Card
  title="Example Title"
  description="This is a sample description for the card."
  imageUrl="https://example.com/image.jpg"
/>; */
}
