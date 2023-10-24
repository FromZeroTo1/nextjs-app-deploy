'use client'

import { useCategoryEdit } from '@/hooks/admin/useCategoryEdit'
import AdminSidebar from '@/ui/admin-sidebar/AdminSidebar'
import Field from '@/ui/field/Field'
import Heading from '@/ui/heading/Heading'
import SlugField from '@/ui/slug-field/SlugField'
import { generateSlug } from '@/utils/generate-slug'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import styles from './CategoryEdit.module.scss'
import { ICategoryEditInput } from './interface/categoryEdit.interface'

const CategoryEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues
	} = useForm<ICategoryEditInput>({
		mode: 'onChange'
	})

	const { onSubmit } = useCategoryEdit(setValue)

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<AdminSidebar />
				<div className={styles.fill}>
					<Heading className={styles.heading}>Редактирование Категории</Heading>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...register('name', {
								required: 'Название обязательно!'
							})}
							label='Название'
							placeholder='Название'
							error={errors.name?.message}
						/>

						<div>
							<SlugField
								register={register}
								error={errors.slug}
								generate={() => {
									setValue('slug', generateSlug(getValues('name')))
								}}
							/>
						</div>
						<button>Update</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CategoryEdit
