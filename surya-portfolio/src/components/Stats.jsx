function Stats() {

    const stats = [
        {
            number: "02+",
            label: "YEARS EXPERIENCE"
        },
        {
            number: "07",
            label: "ERP MODULES"
        },
        {
            number: "50K+",
            label: "RECORDS PROCESSED"
        },
        {
            number: "88%",
            label: "ML ACCURACY"
        }
    ];

    return (
        <section className="stats">

            {stats.map((stat) => (

                <div className="stat-item" key={stat.label}>

                    <strong>
                        {stat.number}
                    </strong>

                    <span>
                        {stat.label}
                    </span>

                </div>

            ))}

        </section>
    );
}

export default Stats;