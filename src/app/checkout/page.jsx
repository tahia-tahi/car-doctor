import CheckoutForm from '@/components/CheckoutForm'
import React from 'react'

export default async function CheckoutPage({params}) {


    const p = await params
    const res = await fetch(`http://localhost:3000/api/services/${p.id}`)
    const data = await res.json()
    return (
        <div>
            <CheckoutForm></CheckoutForm>
        </div>
    )
}
