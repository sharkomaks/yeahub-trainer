import { FaGithub, FaTelegramPlane, FaTiktok, FaYoutube } from 'react-icons/fa';
import { IoLogoFigma } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Container } from '@/shared/ui/Container';
import { IconLink } from '@/shared/ui/IconLink';

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='bg-footer mt-auto pt-10 pb-5'>
			<Container>
				<div className='flex flex-col gap-3'>
					<div className='text-2xl font-extrabold text-white'>Yeahub</div>
					<p className='font-semibold text-white'>Выбери, каким будет IT завтра, вместе с нами!</p>
					<div className='text-xs text-gray-400'>
						YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш исходный
						код доступен для просмотра на GitHub. Дизайн проекта также открыт для ознакомления в Figma.
					</div>
					<div className='flex items-center justify-between border-t border-white/70 pt-4 text-sm text-gray-400'>
						<span>&copy; {year} YeaHub</span>
						<div className='flex items-center gap-4'>
							<Link to='/' className='flex items-center gap-2 transition-colors hover:text-white'>
								Документы
							</Link>
							<Link to='/' className='flex items-center gap-2 transition-colors hover:text-white'>
								Медиа
							</Link>
							<div className='flex items-center gap-2'>
								<IconLink href='https://www.figma.com/' Icon={IoLogoFigma} />
								<IconLink href='https://github.com' Icon={FaGithub} />
								<IconLink href='https://youtube.com' Icon={FaYoutube} />
								<IconLink href='https://www.tiktok.com/' Icon={FaTiktok} />
								<IconLink href='https://t.me' Icon={FaTelegramPlane} />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
