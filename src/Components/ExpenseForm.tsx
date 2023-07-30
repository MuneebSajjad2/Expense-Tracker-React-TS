import { useForm } from 'react-hook-form';
import Categories from '../Categories'
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'



interface Props {
    onSubmit : (data : ExpenseFormData) => void
}


const schema = z.object({
    description : z.string().min(3, {message: 'description should be 3 words long'}).max(50),
    amount : z.number({invalid_type_error : "Amount is invalid"}).min(0.01).max(100_000),
    category : z.enum(Categories, {
        errorMap : () => ({message : 'category is required'})
    })

})


type ExpenseFormData = z.infer<typeof schema>

const ExpenseForm = ({onSubmit} : Props) => {
     
   const {register, handleSubmit, formState:{errors} } = useForm<ExpenseFormData>({resolver : zodResolver(schema)})


  return (
    <form  className="form-control"  onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3"><label htmlFor="description">
            Description
            </label>
            {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <input {...register('description')} type="text" id='description' className='form-control mb-3' />
        <div className="mb-3"><label htmlFor="amount">
            Amount
            </label>
            <input
             {...register('amount',{valueAsNumber: true})}
              type="number"
               id='amount'
                className='form-control mb-3' />
            {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="category" className='form-label'>Categories</label>
            <select {...register('category')} id="category" className='form-control'>
                <option>Select Category</option>
                {Categories.map((categori) => <option key={categori}>{categori}</option>)}
                    </select>
                    {errors.category && <p className="text-danger">{errors.category.message}</p>}
                    </div>
                    <div className="mb-3"><button className="btn btn-primary">Submit</button></div>
    </form>
  )
}

export default ExpenseForm