import { NextResponse } from 'next/server';
import { connectDB } from '../../lib/mongodb'; 
import User from '../../models/User'; 
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  await connectDB();
  const { name, email, password } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) return NextResponse.json({ error: 'User already exists' }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashed });
  await user.save();

  return NextResponse.json({ message: 'Registered successfully' });
}
