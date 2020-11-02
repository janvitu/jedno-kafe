<template>
  <div class="timetable">
    <h2>Otevírací doba</h2>
    <table class="timetable__day">
      <tbody>
        <th>Pondělí</th>
        <td>{{ openingHours.pondeli }}</td>
      </tbody>
    </table>
    <table class="timetable__day">
      <tbody>
        <th>Úterý</th>
        <td>{{ openingHours.utery }}</td>
      </tbody>
    </table>
    <table class="timetable__day">
      <tbody>
        <th>Středa</th>
        <td>{{ openingHours.streda }}</td>
      </tbody>
    </table>
    <table class="timetable__day">
      <tbody>
        <th>Čtvrtek</th>
        <td>{{ openingHours.ctvrtek }}</td>
      </tbody>
    </table>
    <table class="timetable__day">
      <tbody>
        <th>Pátek</th>
        <td>{{ openingHours.patek }}</td>
      </tbody>
    </table>
    <table class="timetable__day">
      <tbody>
        <th>Sobota</th>
        <td>{{ openingHours.sobota }}</td>
      </tbody>
    </table>
    <table class="timetable__day">
      <tbody>
        <th>Neděle</th>
        <td>{{ openingHours.nedele }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    openingHours: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.timetable {
  background-color: var(--light-color);
  box-shadow: 0px 0px 21px -10px var(--dark-color);
  padding: 25px 35px;
  height: max-content;
  width: max-content;
  max-width: 95vw;
  border-radius: 5%;
}
.lead {
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: lowercase;
  background-clip: text;
  color: var(--dark-graphics);
  text-align: center;
}
h2 {
  text-align: center;
  margin: 1rem 0 1.5rem 0;
}
h2::after {
  content: "";
  position: absolute;
  height: 4px;
  width: 40px;
  bottom: -0.75rem;
  left: 50%;
  background: var(--complementary);
  transform: translate(-50%, 50%);
  border-radius: 2px;
}
table {
  display: table;
  width: 100%;
  border-collapse: separate;
  box-sizing: border-box;
  border-spacing: 2px;
  border-bottom: rgb(194, 194, 194) 1px solid;
  margin-bottom: 0.2rem;
}
table:last-child {
  border: none;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td {
  font-size: 1.3rem;
  line-height: 1.8;
  font-weight: 700;
  text-align: center;
  width: 65%;
  text-align: right;
}
th {
  font-size: 1.3rem;
  font-weight: 400;
  text-align: left;
  padding-right: 1rem;
  width: 35%;
}
.timetable > * {
  position: relative;
}
</style>
