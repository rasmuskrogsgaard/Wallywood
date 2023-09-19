import {useForm} from 'react-hook-form';

const Signup = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data);

    const url = "http://localhost:4000/login"
    
    
    const body = new URLSearchParams()
    body.append('firstname' , data.firstname)
    body.append('lastname' , data.lastname)
    body.append('email' , data.email)
    body.append('password' , data.password)
    body.append('org_id', "1")
    body.append('is_active', "1")
    const options = {
        method: "POST",
        body: body
       
    }

    fetch(url, options).then(res => res.json()).then(data => console.log(data))
    
}

   

    return (



    <form onSubmit={handleSubmit(onSubmit)}>
   
    <label>Fornavn</label>
    <input type="firstname" {...register('firstname', {required: true, minLength: 4})}/>
    {errors.firstname?.type == "required" && <span>Du skal udfylde brugernavn</span>}
    {errors.firstname?.type == "minLength" && <span>mindst 4 bogstaver</span>}
    
    
    <label>Efternavn</label>
    <input type="lastname" {...register('lastname' , {required: true})}/>
    {errors.lastname && <span>Du skal udfylde efternavn</span>}
  
   


    <label>Email</label>
    
    <input type="email" {...register('email' , {required: true})}/>
    {errors.email && <span>Du skal udfylde email</span>}
   




    <label>Password</label>
    <input type="password" {...register('password' , {required: true})}/>
    {errors.password && <span>Du skal udfylde password</span>}
    <input type="submit" value="Submit"/>
   
   
    
    </form>

        




)


};


export default Signup;