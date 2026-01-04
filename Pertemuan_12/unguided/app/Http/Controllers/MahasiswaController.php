<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Mahasiswa;

class MahasiswaController extends Controller
{
    public function insertData()
    {
        DB::insert(
            "INSERT INTO mahasiswas 
            (nim, nama_lengkap, tempat_lahir, tanggal_lahir, alamat, fakultas, jurusan) 
            VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
                '23111040',
                'Alya Rabani',
                'Palu',
                '2004-09-28',
                'Jl. Veteran',
                'Informatika',
                'RPL'
            ]
        );
        return "Data berhasil ditambahkan (Raw SQL)";
    }

    public function selectData()
    {
        $data = DB::table('mahasiswas')->get();
        return $data;
    }

    public function updateData()
    {
        DB::table('mahasiswas')
            ->where('nim', '23111040')
            ->update(['fakultas' => 'Fakultas Ilmu Komputer']);

        return "Data berhasil diupdate (Query Builder)";
    }

    public function deleteData()
    {
        DB::table('mahasiswas')
            ->where('nim', '23111040')
            ->delete();

        return "Data berhasil dihapus";
    }

    public function insertEloquent()
    {
        Mahasiswa::create([
            'nim' => '23111041',
            'nama_lengkap' => 'Alya Rabani',
            'tempat_lahir' => 'Palu',
            'tanggal_lahir' => '2004-09-28',
            'alamat' => 'Jl. Veteran',
            'fakultas' => 'Informatika',
            'jurusan' => 'RPL'
        ]);

        return "Data berhasil ditambahkan (Eloquent ORM)";
    }
}