export class Article {
  id: number;
  author: string;
  title: string;
  description: string;
  date: Date = new Date();
  content: string;
  type: string;
  image: string;
  view: number;

  constructor(
    id: number,
    title: string,
    description: string,
    date: Date = new Date(),
    content: string,
    type: string,
    image: string,
    author: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.image = image;
    this.type = type;
    this.content = content;
    this.author = author;
  }
}
