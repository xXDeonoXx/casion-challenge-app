export default interface Publication {
  _id: string;
  title: string;
  subTitle: string;
  body: string;
  category: string;
  image_url: string;
  createdAt: Date;
  updatedAt: Date;
}
