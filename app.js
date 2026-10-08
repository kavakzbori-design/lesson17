// For1: k sonini n marta chiqaruvchi programma
console.log("--- For1: k sonini n marta chiqaruvchi ---");
let k = 5;
let n = 7;
for (let i = 0; i < n; i++) {
    console.log(k);
}

console.log("\n--- For2: a va b orasidagi barcha sonlar ---");
// For2: a va b sonlari orasidagi barcha butun sonlarni chiqaruvchi
let a = 2;
let b = 8;
let count2 = 0;
for (let i = a; i <= b; i++) {
    console.log(i);
    count2++;
}
console.log("Jami sonlar soni:", count2);

console.log("\n--- For3: a va b orasidagi sonlar (kamayish tartibida) ---");
// For3: a va b orasidagi barcha sonlarni (a va b dan tasqari) kamayish tartibida chiqaruvchi
let count3 = 0;
for (let i = b - 1; i > a; i--) {
    console.log(i);
    count3++;
}
console.log("Jami sonlar soni:", count3);

console.log("\n--- For4: Konfet narxlari ---");
// For4: 1, 2, ..., 10 kg konfetning narxini chiqaruvchi
let pricePerKg = 15000; // 1 kg konfetning narxi (sum)
for (let i = 1; i <= 10; i++) {
    console.log(`${i} kg konfetning narxi: ${pricePerKg * i} sum`);
}
