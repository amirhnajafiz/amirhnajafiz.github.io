<template>
  <div class="timeline">
    <div class="outer">
      <div
        class="card"
        v-for="job in jobs"
      >
        <div class="info">
          <h3 class="title">
            {{ job.title }}
          </h3>
          <p>
            {{ job.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Career",
  data() {
    return {
      jobs: [
        {
          title: "title 1",
          description: "something"
        },
        {
          title: "title 2",
          description: "something"
        },
        {
          title: "title 3",
          description: "something"
        }
      ]
    }
  },
}
</script>

<style scoped>
/* Timeline Container */
.timeline {
  position: relative;
  background: #181818;
  margin: 80px auto 200px;
  padding: 20px;
  display: flex;
  justify-content: center;
}

/* Card container */
.card {
  position: relative;
  max-width: 400px;
}

/* setting padding based on even or odd */
.card:nth-child(odd) {
  padding: 30px 0 30px 30px;
}
.card:nth-child(even) {
  padding: 30px 30px 30px 0;
}
/* Global ::before */
.card::before {
  content: "";
  position: absolute;
  width: 50%;
  border: solid #00bd7e;
}

/* Setting the border of top, bottom, left */
.card:nth-child(odd)::before {
  left: 0;
  top: -4.5px;
  bottom: -4.5px;
  border-width: 5px 0 5px 5px;
  border-radius: 50px 0 0 50px;
}

/* Setting the border of top, bottom, right */
.card:nth-child(even)::before {
  right: 0;
  top: 0;
  bottom: 0;
  border-width: 5px 5px 5px 0;
  border-radius: 0 50px 50px 0;
}

/* Removing the border if it is the first card */
.card:first-child::before {
  border-top: 0;
  border-top-left-radius: 0;
}

/* Removing the border if it is the last card  and it's odd */
.card:last-child:nth-child(odd)::before {
  border-bottom: 0;
  border-bottom-left-radius: 0;
}

/* Removing the border if it is the last card  and it's even */
.card:last-child:nth-child(even)::before {
  border-bottom: 0;
  border-bottom-right-radius: 0;
}

/* Information about the timeline */
.info {
  display: flex;
  flex-direction: column;
  background: #333;
  color: #bdbdbd;
  border-radius: 10px;
  padding: 10px;
}

/* Title of the card */
.title {
  color: #00bd7e;
  position: relative;
}

/* Timeline dot  */
.title::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 999px;
  border: 3px solid #00bd7e;
}

/* text right if the card is even  */
.card:nth-child(even) > .info > .title {
  text-align: right;
}

/* setting dot to the left if the card is odd */
.card:nth-child(odd) > .info > .title::before {
  left: -45px;
}

/* setting dot to the right if the card is odd */
.card:nth-child(even) > .info > .title::before {
  right: -45px;
}
</style>