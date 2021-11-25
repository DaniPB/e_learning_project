class Courses {
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  data = [
    {
      name: "Javascript",
      level: "Principiantes",
      image: "https://res.cloudinary.com/practicaldev/image/fetch/s--uqRmMHM---/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/2re7bewq15mpw0ghmmnd.png",
      logo: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
      description: this.description,
      liked: true
    },
    {
      name: "Ruby on Rails",
      level: "Intermedio",
      image: "https://www.koombea.com/wp-content/uploads/2021/08/ruby-vs-rails-banner@2x.jpg",
      logo: "https://www.muylinux.com/wp-content/uploads/2017/12/Ruby-on-Rails-1.png",
      description: this.description,
      liked: false
    },
    {
      name: "HTML & CSS",
      level: "Avanzado",
      image: "https://images.tynker.com/blog/wp-content/uploads/20190226100225/02-25-2018-html-css-announcement-blog.png",
      logo: "https://www.lambdatest.com/blog/wp-content/uploads/2018/11/JPG-2.jpg",
      description: this.description,
      liked: false
    },
    {
      name: "ReactJS",
      level: "Principiantes",
      image: "https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png",
      logo: "https://elevatecnologia.com/wp-content/uploads/2020/12/Beneficios-de-React-JS-y-por-que-deberia-combinarlo-con.png",
      description: this.description,
      liked: false
    },
    {
      name: "UI Diseño",
      level: "Avanzado",
      image: "https://assets.materialup.com/uploads/d6caaaf9-44d3-4035-9ee4-5ba5130211e0/preview.png",
      logo: "https://www.popwebdesign.net/popart_blog/wp-content/uploads/2020/09/ui-ux-design-trends-2021.jpg",
      description: this.description,
      liked: true
    },
    {
      name: "Phyton",
      level: "Intermedio",
      image: "https://assets.entrepreneur.com/content/3x2/2000/1634238771-python.jpg?auto=webp&quality=95&crop=16:9&width=675",
      logo: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/por-que-aprender-python.png",
      description: this.description,
      liked: true
    }
  ]

  response() {
    return this.data;
  }
}

export default new Courses();



