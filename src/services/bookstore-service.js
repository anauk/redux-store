export default class BookstoreService {
data=[
    { id: 1,
        title: 'Мастер и Маргарита',
        author: 'Михаил Булгаков',
        price: 32,
        coverImage: "https://ruskino.ru/media/poster/007/ysmqiip8WcwVuZr9N6s3ox916IP.jpg"

    },
    {id: 2,
        title: 'Грегори Дэвид Робертс',
        author: 'Шантарам',
        price: 36,
        coverImage: "https://ruskino.ru/media/poster/007/ysmqiip8WcwVuZr9N6s3ox916IP.jpg"
    }
];
    getBooks(){
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res(this.data);
                rej(new Error('Something went wrong!'))
            }, 700);
        });
    }

}