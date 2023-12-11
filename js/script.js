angular.module("meuMulo")
    .controller("indexController", function ($scope) {
        $scope.titulo = "HOME";
        $scope.alunos = [
            { nome: "Camila", emael: "camila@mail.com", nota1: 65, nota2: 80, nota3: 55 },
            { nome: "Pedro", emael: "pedro@mail.com", nota1: 75, nota2: 80, nota3: 55 },
            { nome: "Murilo", emael: "murilo@mail.com", nota1: 65, nota2: 60, nota3: 55 },
            { nome: "João", emael: "joao@mail.com", nota1: 65, nota2: 80, nota3: 55 },
            { nome: "Ana", emael: "ana@mail.com", nota1: 65, nota2: 80, nota3: 55 }
        ];
        var init = function () {
            $scope.alunos.forEach(function (aluno) {
                aluno.media = media(aluno);
            });
            limpaForm();
        };
        var contar = 0;
        var media = function (Aluno) {
            console.log(contar++)
            var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3)) / 3;
            return media.toFixed(2);
        };

        $scope.abreAddAluno = function () {
            $scope.editando = false;
            limpaForm();
            $('#modal1').modal('open'); 
        };

        $scope.addAluno = function (Aluno) {
            Aluno.media = media(Aluno);
            $scope.alunos.push(Aluno);
            // $('.modal').closeModal();
            $('#modal1').modal('close');
            limpaForm();
        };
        $scope.editando = false;
        var alunoEditar;
        $scope.editarAluno = function (Aluno) {
            $scope.editando = true;
            angular.copy(Aluno, $scope.Aluno);
            $('#modal1').modal('open');
            alunoEditar = Aluno;
        };
        $scope.salvarAluno = function (Aluno) {
           alunoEditar.nome = Aluno.nome;
           alunoEditar.emael = Aluno.emael;
           alunoEditar.nota1 = Aluno.nota1;
           alunoEditar.nota2 = Aluno.nota2;
           alunoEditar.nota3 = Aluno.nota3;
           alunoEditar.media = media(Aluno);
           $('#modal1').modal('close');
        };
        $scope.deletarAluno = function (Aluno) {
           for (var index in $scope.alunos) {
              var aux =  $scope.alunos[index];
               if (Aluno === aux) {
                $scope.alunos.splice(index, 1);
               }
           } 
        };
        var limpaForm = function () {
            $scope.Aluno = { nome: "", emael: "", nota1: '', nota2: '', nota3: '', media: '' };
        };
        init();
    })
    .controller("contactoController", function ($scope) {
        $scope.titulo = "CONTACTO"; 
    })  
