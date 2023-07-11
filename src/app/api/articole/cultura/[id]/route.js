import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Cultura from "@/models/Cultura";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const cultura = await Cultura.findById(id);

    return new NextResponse(JSON.stringify(cultura), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Cultura.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};