import { ICategoryEditInput } from '@/app/manage/category/edit/[id]/interface/categoryEdit.interface'
import { getAdminUrl } from '@/config/url.config'
import { CategoryService } from '@/services/category/category.service'
import { getKeys } from '@/utils/object/getKeys'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'

export const useCategoryEdit = (
	setValue: UseFormSetValue<ICategoryEditInput>
) => {
	const { push } = useRouter()
	const searchParams = useSearchParams()

	const queryId = searchParams.get('id')
	const catId = String(queryId)

	const { isLoading } = useQuery(
		['category', catId],
		() => CategoryService.getById(catId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach(key => {
					setValue(key, data[key])
				})
			},
			enabled: !!queryId
		}
	)

	const { mutateAsync } = useMutation(
		['update category'],
		(data: ICategoryEditInput) => CategoryService.update(catId, data),
		{
			onSuccess() {
				toastr.success('Updated category', 'Обновление прошло успешно')
				push(getAdminUrl('categories'))
			}
		}
	)

	const onSubmit: SubmitHandler<ICategoryEditInput> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
