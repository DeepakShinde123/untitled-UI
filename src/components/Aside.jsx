import { TbMessageCircle ,TbMap2 ,TbDeviceMobile, TbBrandFacebook ,TbBrandLinkedin ,TbBrandX} from "react-icons/tb";
function Aside() {
  const contactInfo = [
    {
      id: 0,
      icon: TbMessageCircle,
      title: "Contact",
      description: "Get in touch with us",
      action: "info@example.com",
    },
    {
      id: 1,
      icon: TbMap2,
      title: "Visit us",
      description: "Come say hello at our office",
      action: "100 Main Street, New York, NY 10018",
    },
    {
      id: 2,
      icon: TbDeviceMobile,
      title: "Call us",
      description: "Call us anytime",
      action: "(123) 456-7890",
    },
  ];
  return (
    <aside className="flex min-h-screen flex-col justify-between">
      <div>
        {contactInfo.map((info) => {
          return (
            <div key={info.id} className="mb-5">
              <h3 className="text-lg font-bold">
                {<info.icon size={25} />} {info.title}
              </h3>
              <p className="mb-2 text-slate-700">{info.description}</p>
              <p className="cursor-pointer">{info.action}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        <TbBrandFacebook size={25} className="cursor-pointer" />
        <TbBrandLinkedin size={25} className="cursor-pointer" />
        <TbBrandX size={25} className="cursor-pointer" />
      </div>
    </aside>
  );
}

export default Aside;