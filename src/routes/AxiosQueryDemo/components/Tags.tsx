import { FC } from "react";

interface TagsProps {
  tags: string[];
}

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <p>
      {tags?.map((tag) => (
        <span> #{tag}</span>
      ))}
    </p>
  );
};

export default Tags;
