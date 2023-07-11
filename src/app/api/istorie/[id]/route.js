import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Istorie from "@/models/Istorie";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const istorie = await Istorie.findById(id);

    return new NextResponse(JSON.stringify(istorie), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Istorie.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};