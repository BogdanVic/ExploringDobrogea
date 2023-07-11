import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Turism from "@/models/Turism";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const turism = await Turism.findById(id);

    return new NextResponse(JSON.stringify(turism), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Turism.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};