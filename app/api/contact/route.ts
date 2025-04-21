import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
	try {
		const formData = await req.json();

		// 트랜스포터 설정
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		// 이메일 내용 구성
		const mailOptions = {
			from: `"Tello101 Contact" <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_USER,
			subject: 'A new inquiry has been received on the Tello101 website.',
			html: `
        <h2>Contact Information</h2>
        <ul>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          ${formData.kakaoId ? `<li><strong>Kakao ID:</strong> ${formData.kakaoId}</li>` : ''}
          ${formData.preferredTutor ? `<li><strong>Preferred Tutor:</strong> ${formData.preferredTutor}</li>` : ''}
          <li><strong>English Level:</strong> ${formData.englishLevel}</li>
          <li><strong>Learning Goal:</strong> ${formData.learningGoal}</li>
          ${formData.availability ? `<li><strong>Available Times:</strong> ${formData.availability}</li>` : ''}
        </ul>
      `,
		};

		// 이메일 전송
		await transporter.sendMail(mailOptions);

		return NextResponse.json({ success: true, message: '이메일이 성공적으로 전송되었습니다.' });
	} catch (error) {
		console.error('이메일 전송 오류:', error);
		return NextResponse.json({ success: false, message: '이메일 전송 중 오류가 발생했습니다.' }, { status: 500 });
	}
}
