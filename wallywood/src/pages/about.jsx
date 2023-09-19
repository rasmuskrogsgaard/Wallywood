import style from "./about.module.scss";
const About = () => {
  return (
    <div className={style.gridcon}>
     <h5>Om os</h5>
      <figure>
        
        <figcaption> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
        ac ipsum sed faucibus. Vivamus mollis sagittis hendrerit. Donec turpis
        erat, vestibulum non turpis sed, finibus congue velit. Pellentesque
        sagittis est eget nisi malesuada, a aliquet est imperdiet. Aenean
        dapibus finibus laoreet. Pellentesque suscipit hendrerit enim, non
        tempor erat sodales quis. Nullam sed enim eu elit posuere commodo at în
        nisl. Aliquam egestas turpis vel odio consectetur auctor. Cras porttitor
        orci non scelerisque porttitor.<br></br> Phasellus dictum ligula rutrum neque
        pharetra, faucibus molestie libero ultricies. Aenean risus risus,
        sollicitudin at rutrum vel, venenatis ac urna. Phasellus a pulvinar
        massa. Phasellus faucibus libero eu malesuada tristique. Donec tristique
        lacus in ipsum sollicitudin viverra. Sed porttitor sit amet felis
        accumsan egestas. Fusce quis commodo urna, non feugiat odio. Nam in
        tempus magna. Quisque eu neque sed lacus egestas pulvinar eget in lacus.
        Quisque sit amet sem efficitur sapien bibendum mollis. Quisque in eros
        sit amet justo scelerisque rutrum. <br></br>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed scelerisque ac ipsum sed faucibus.
        Vivamus mollis sagittis hendrerit. Donec turpis erat, vestibulum non
        turpis sed, finibus congue velit. Pellentesque sagittis est eget nisi
        malesuada, a aliquet est imperdiet. Aenean dapibus finibus laoreet.
        Pellentesque suscipit hendrerit enim, non tempor erat sodales quis.
        Nullam sed enim eu elit posuere commodo at în nisl.</figcaption>
        <img className={style.aboutimg} src="../src/assets/star.jpg"></img>
      </figure>
      <p>
       
      </p>
     
    </div>
  );
};

export default About;
