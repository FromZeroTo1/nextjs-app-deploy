import { forwardRef } from 'react'
import { IField } from './field.interface'
import cn from 'clsx'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, label, error, className, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn('mb-3', className)} style={style}>
				<label>
					<span className='mb-1 block'>{label}</span>
					<input ref={ref} type={type} placeholder={placeholder || ''} className={cn('px-4 py-2 w-full outline-none border-b-2 border-primary border-solid placeholder:font-light', {
						'border-red': !!error
					})} {...rest} />
				</label>
				{error && <div className='text-red mt-1 text-sm'>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
