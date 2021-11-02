<template>
  <div class="d-flex my-3">
    <input @keyup.enter="searchMovies" class="form-control" type="text" v-model="title" placeholder="Search for Movies, Series and More">
    <div class="selects d-flex">
      <select v-for="filter in filters" 
              :key="filter.name" 
              v-model="$data[filter.name]"
              class="form-select ms-2">
        <option v-if="filter.name == 'year'" value="">All</option>
        <option v-for="item in filter.items"
                :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button @click="searchMovies" class="btn btnG ms-2 col-2">Search</button>
  </div>
</template>

<script>

export default {
  name: 'MovieSearchBar',
  data: function() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode'],
        },
        {
          name: 'number',
          items: [10, 20, 30],
        },
        {
          name: 'year',
          items: [
            2021, 2020, 
            2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 
            2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 
            1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990,
            1989, 1988, 1987, 1986, 1985,
          ]
        }
      ],
    }
  },
  methods: {
    searchMovies: function() {
      return this.$store.dispatch('searchMovies', {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year,
      })
    }
  }
}
</script>

<style scoped>
input {
  width: 50vw;
  font-weight: bold;
}

select, button {
  width: 10vw;
  font-weight: bold;
}
</style>