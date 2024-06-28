import { Suspense } from 'react';

import ic_default from '../assets/icons/ic_link_ext.svg';

export default function ImgIcon(props) {
	const {
		src = ic_default,
		fallback = ic_default,
		alt = 'some relevant pic',
		width = '20px',
		height = '20px',
		loading = 'lazy',
		decoding = 'async',
		className = '',
		...rest
	} = props;

	return (
		<Suspense
			delay='10ms'
			fallback={
				<img
					src={fallback}
					alt={alt}
					className={`icon ${className}`}
					width={width}
					height={height}
					loading='eager'
					decoding={'auto'}
					{...rest}
				/>
			}>
			<img
				src={src || fallback}
				alt={alt}
				className={`icon ${className}`}
				width={width}
				height={height}
				loading='eager'
				decoding={'auto'}
				{...rest}
			/>
		</Suspense>
	);
}
