import grcp from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import readline from "node:readline/promises";

async function main(){
  const packageDef = protoLoader.loadSync("calculator.proto");
  const grpcObject = grpc.loadPackageDefinition(packageDef).calculator;

  const client = new grpcObject.Calculator(
    "localhost:50051",
    grcp.credentials.createInsecure()
  );

  const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("1. Persegi\n2. Persegi Panjang\n3. Segitiga\n4. Lingkaran\n");
  const option = await rl.question(
    "Pilih method yang ingin dijalankan (1-4): "
  );
  rl.close();

  switch (option){

  }
};


