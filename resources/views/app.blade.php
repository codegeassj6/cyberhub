<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        {{-- <link rel="stylesheet" href="{{ asset('font-awesome-4.7.0/css/font-awesome.css') }}"> --}}
    </head>
    <body>

        <div id="app">
            <app-component></app-component>
        </div>

        {{-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5828491790124517"
     crossorigin="anonymous"></script> --}}

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
