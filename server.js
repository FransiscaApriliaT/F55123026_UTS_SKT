import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const packageDef = protoLoader.loadSync("calculator.proto");
const grpcObject = grpc.loadPackageDefinition(packageDef).calculator;

function persegi(call, callback) {
    const {sisi} = call.request;
    callback(null, { result: sisi * sisi });
}

function persegi_panjang(call, callback){
    const {panjang, lebar} = call.request;
    callback(null, {result: panjang * lebar});
}

function segitiga(call, callback) {
    const { alas, tinggi } = call.request;
    callback(null, { return:0.5 * alas * tinggi });
}

function lingkaran(call, callback) {
    const { jari_jari } = call.request;
    callback(null, { request: Math.PI * jari_jari * jari_jari });
}

const server = new grcp.Server();
server.addService(grpcObject.Calculator.service, {
    Persegi: persegi,
    PersegiPanjang: persegi_panjang,
    Segitiga: segitiga,
    Lingkaran: lingkaran,
});

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("✅ gRPC server running at http://0.0.0.0:50051");
    server.start();
  }
);