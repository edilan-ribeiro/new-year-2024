import { useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from '@fireworks-js/react'

export function FireworksAnimation() {
	const ref = useRef<FireworksHandlers>(null)

	return (
		<>
			<Fireworks
				ref={ref}
				options={{
					opacity: 0.5,
					mouse: { click: true, max: 1 },
					particles: 80,
					lineWidth: { explosion: { min: 1.0, max: 6 } },
				}}
				className="top-0 left-0 w-full h-full fixed z-0 bg-slate-900"
			/>
		</>
	)
}
