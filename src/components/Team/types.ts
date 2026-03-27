export interface TeamProps {
  title: string;
  content: string;
  staff: {
    name: string;
    bio: string;
    photo: string;
  }[];
  id: string;
}