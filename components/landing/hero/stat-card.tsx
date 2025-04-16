import { Card, CardContent } from '@/components/ui/card';

export const StatCard = ({ value, label }: { value: string; label: string }) => {
	return (
		<Card className='bg-white/10 backdrop-blur-sm h-full border-none text-white'>
			<CardContent className='p-6'>
				<p className='text-3xl md:text-4xl font-bold mb-2'>{value}</p>
				<p className='text-sm'>{label}</p>
			</CardContent>
		</Card>
	);
};
