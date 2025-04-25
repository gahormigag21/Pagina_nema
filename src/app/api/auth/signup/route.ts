import {NextResponse} from 'next/server';
import User from '@/models/user';
import {connectDB} from '@/libs/mongodb';
import bcrypt from 'bcryptjs';

export async function POST( request: Request) {
    const {name, email, password} = await request.json();

    console.log('Nombre:', name, 'Email:', email, 'Password:', password);


    if (!password || password.length < 6) {
        return NextResponse.json({error: 'La contraseña debe tener al menos 6 caracteres'}, {status: 400});
    }
    if (!email.includes('@')) {
        return NextResponse.json({error: 'El correo debe ser válido'}, {status: 400});
    }
    if (name.length < 3) {
        return NextResponse.json({error: 'El nombre debe tener al menos 3 caracteres'}, {status: 400});
    }

    try {
        await connectDB();
        
        const UserExists = await User.findOne({email});
        
        if (UserExists) {
            return NextResponse.json({error: 'El correo ya está registrado'}, {status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            createdAt: Date.now(),
        });
        const savedUser = await newUser.save();
        console.log('User created:', savedUser);
        return NextResponse.json({...savedUser.toObject(), message: 'User created successfully'}, {status: 201});
    } catch (error) {
        console.error('Error creating user:', error);
        if (error instanceof Error) {
            return NextResponse.json({error: 'Error interno del servidor'}, {status: 500});
        }
    }
}