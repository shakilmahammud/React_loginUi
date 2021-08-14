import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import {Password} from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm, Controller } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import './Login.css'

export const Login = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [loading1, setLoading1] = useState(false);
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const defaultValues = {
        name: '',
        email: '',
        password: '',
        date: null,
        country: null,
        accept: false
    }


    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = (data) => {
        setFormData(data);
        setShowMessage(true);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    }

    return (
       <>
<div className="loginSection"
       style={{
           background:'url("https://cms-assets.tutsplus.com/uploads/users/2657/posts/35772/image/browse.jpg")',
           backgroundSize:"cover",
           backgroundRepeat:"no-repeat",
           backgroundPosition:"center",
           height: "100vh",
           position: "relative",
           zIndex:1,
       }}>
    <div className="demo-container p-p-4 ">
   
    <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>

            <div className="p-d-flex p-jc-center">
                <div className="card">
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <Card>
                    <h5 className="p-text-center">Login</h5>
                        <div className="p-field">
                        <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                               
                                    <i className="pi pi-user"></i>
                                </span>
                                <span className="p-float-label">
                                <Controller name="name" control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
                                    <InputText name="name" id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                 <label htmlFor="name" className={classNames({ 'p-error': errors.password })}>User Name*</label>
                                </span>
                            
                            </div>
                           
                        </div>
                      
                        <div className="p-field">
                        <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                               
                                    <i className="pi pi-lock"></i>
                                </span>
                            <span className="p-float-label">
                                <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                    <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                            </span>
                            </div>
                        </div>
                        <div className="p-field-checkbox">
                            <Controller name="accept" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} className={classNames({ 'p-invalid': fieldState.invalid })} />
                            )} />
                            <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>I agree to the terms and conditions*</label>
                        </div>

                        <Button type="submit" label="Submit" className="p-mt-2"/>
                        </Card>
                    </form>
                </div>
            </div>
        </div>
       
    </div>
</div>
       </>
    )
}
