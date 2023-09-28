"use client";

// Importing the necessary types and utilities.
import { ShowMoreProps } from "@/types";
import { CustomButton } from ".";

// ShowMore component to display more items.
const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

  // Handling navigation to display more items.
  const handleNavigation = () => {
    // Calculating the new limit number based on the page number and navigation type.
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {/* Display the "Show More" button only if there are more items to show. */}
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;