<template>
    <div>
        <h1>Fee Reminder App</h1>
    </div>
</template>

<script>
    export default {
        name: 'FeeHeader',
        props: {
            label: {required: true, type: String},
            done: {default: false, type:Boolean}
            },
        data() {
            return {
                isDone: this.done
                };
            }
        };
</script>

<style scoped>
    h1 {
        background-color: azure;
        font-family: Elephant;
        font-size: 4em;
        padding: 1em 0;
        margin: 0;
        }
</style>