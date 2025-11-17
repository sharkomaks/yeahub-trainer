import { Button } from '@/shared/ui/Button';

export function DesktopAuthButtons() {
	return (
		<div className='hidden items-center gap-6 md:flex'>
			<Button variant='outline' className={'text-sm'}>
				Вход
			</Button>
			<Button variant='primary' className={'px-8 py-3 text-lg'}>
				Регистрация
			</Button>
		</div>
	);
}
