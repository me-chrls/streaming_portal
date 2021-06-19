function MovieModel(name, image, movieDetails){
    var self = this;
    self.name = name;
    self.image = image;
    self.movieDetails = movieDetails;
    self.detailsShown = ko.observable(false)
    self.showDetails = function() {
        self.detailsShown() ? self.detailsShown(false) : self.detailsShown(true);
    }
}

function MovieDetailsModel(director, performer, releaseYear, description){
    var self = this;
    self.director = director;
    self.performer = performer;
    self.releaseYear = releaseYear;
    self.description = description;
}

function CategoryModel(category, movies){
    var self = this;
    self.category = category
    self.movies = movies;
}

function StreamingViewModel(){
    var self = this;
    self.categories = ko.observableArray([
        new CategoryModel("Neue Filme", ko.observableArray([
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
        ])),
        new CategoryModel("Beliebte Filme", ko.observableArray([
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
        ])),
        new CategoryModel("Nochmal Ansehen", ko.observableArray([
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://i.weltbild.de/p/avengers-2-age-of-ultron-303199916.jpg?v=1&wp=_max",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
        ]))
    ])
};


ko.applyBindings(new StreamingViewModel());



