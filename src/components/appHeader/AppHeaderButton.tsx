const AppHeaderButton: React.FC<{name: string; icon: JSX.Element}> = (props) => {
  const {name, icon} = props;
  return (
    <div className="header-button group active:bg-slate-100 rounded-xl 
                    transition-all duration-100 cursor-pointer relative">
      <p className="mr-5 text-xl text-gray-600 group-hover:text-red-600 transition-all duration-100">{name}</p>
      {icon}
      <div className="stripe group-hover:min-w-full absolute bottom-0"></div>
    </div>
  )
}

export default AppHeaderButton;