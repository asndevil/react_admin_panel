export const userColumn = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "username",
    headerName: "USERNAME",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cell__with__image">
          <img
            src={params.row.img}
            alt={params.row.username}
            className="profile__pic"
          />
          <span>{params.row.username}</span>
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "EMAIL",
    width: 250,
  },
  {
    field: "age",
    headerName: "AGE",
    width: 100,
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`status__check ${params.row.status} `}>
          <span>{params.row.status}</span>
        </div>
      );
    },
  },
];

export const userRow = [
  {
    id: 1,
    username: "meedevil",
    email: "meedevil@gmail.com",
    img: "https://e7.pngegg.com/pngimages/519/242/png-clipart-skull-drawing-tattoo-head-skeleton-skull-monochrome-graffiti.png",
    status: "active",
    age: 23,
  },
  {
    id: 2,
    username: "meenainwal",
    email: "meenainwal@gmail.com",
    img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_24/2041281/170616-terminator-mn-1700.jpg",
    status: "active",
    age: 22,
  },
  {
    id: 3,
    username: "jane",
    email: "jane@gmail.com",
    img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_24/2041281/170616-terminator-mn-1700.jpg",
    status: "pending",
    age: 22,
  },
  {
    id: 4,
    username: "Alice",
    email: "alice@gmail.com",
    img: "https://www.futureagenda.org/wp-content/uploads/2018/12/the_age_of_women-1280x800-c-center.jpg",
    status: "pending",
    age: 21,
  },
  {
    id: 5,
    username: "Alice",
    email: "alice@gmail.com",
    img: "https://www.futureagenda.org/wp-content/uploads/2018/12/the_age_of_women-1280x800-c-center.jpg",
    status: "pending",
    age: 21,
  },
  {
    id: 6,
    username: "Alice",
    email: "alice@gmail.com",
    img: "https://www.futureagenda.org/wp-content/uploads/2018/12/the_age_of_women-1280x800-c-center.jpg",
    status: "pending",
    age: 21,
  },
  {
    id: 7,
    username: "Alice",
    email: "alice@gmail.com",
    img: "https://www.futureagenda.org/wp-content/uploads/2018/12/the_age_of_women-1280x800-c-center.jpg",
    status: "pending",
    age: 21,
  },
  {
    id: 8,
    username: "Alice",
    email: "alice@gmail.com",
    img: "https://www.futureagenda.org/wp-content/uploads/2018/12/the_age_of_women-1280x800-c-center.jpg",
    status: "pending",
    age: 21,
  },
  {
    id: 9,
    username: "Alice",
    email: "alice@gmail.com",
    img: "https://www.futureagenda.org/wp-content/uploads/2018/12/the_age_of_women-1280x800-c-center.jpg",
    status: "pending",
    age: 21,
  },
  {
    id: 10,
    username: "Alice",
    email: "alice@gmail.com",
    img: "https://www.futureagenda.org/wp-content/uploads/2018/12/the_age_of_women-1280x800-c-center.jpg",
    status: "pending",
    age: 21,
  },
  {
    id: 11,
    username: "Alice",
    email: "alice@gmail.com",
    img: "https://www.futureagenda.org/wp-content/uploads/2018/12/the_age_of_women-1280x800-c-center.jpg",
    status: "pending",
    age: 21,
  },
];

export const productColumn = [{ field: "id", headerName: "ID", width: 90 }];
