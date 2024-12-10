import { TbMessageCircle,TbMap2, TbDeviceMobile, TbBrandFacebook,TbBrandLinkedin,TbBrandX } from "react-icons/tb";
function Aside(){
  const contactInfo = [
    {
      id:0,
      icon: <TbMessageCircle />,
      tilte:"Chat to us",
      subTitle: "Our friendly Team",
      action: "hi@untitled.com",
    },
    {
      id:0,
      icon: <TbMessageCircle />,
      tilte:"Visit us",
      subTitle: "Come say hello at our office HQ",
      action: "100 smith street Collingwood VIC 3000 AU",
    },
    {
      id:0,
      icon: <TbMessageCircle />,
      tilte:"Call us",
      subTitle: "Mon-fri from 8am-5pm",
      action: "+1 (555) 000-0000",
    },
  ];
    return (
        <div>
        <TbMessageCircle size="30" />
        <TbMap2 size="30" />
        <TbDeviceMobile size="30" />
        <TbBrandFacebook size="30"/>
        <TbBrandLinkedin size="30" />
        <TbBrandX size="30" />
        </div>
    )
}

export default Aside;