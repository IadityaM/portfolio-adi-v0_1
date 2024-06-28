import ImgIcon from './ImgIcon';

export default function LinkExternal(props) {
	let { to, link, children, label = 'Some Link', className } = props;
	return (
		<a
			className={`link link_ext ${className}`}
			href={to ?? link}
			target='_blank'
			rel='noopener noreferrer'>
			<span className='btn_label'>{children || label}</span>
			<ImgIcon className='icon_btn icon_btn_external' />
			{/* <Iconer pos='right'>🔗</Iconer> */}
		</a>
	);
}
